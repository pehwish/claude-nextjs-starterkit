#!/bin/bash
# Claude Code 훅: Notification (권한 요청/유휴 상태 알림)

# stdin 전체 읽기 (훅 시스템이 JSON을 stdin으로 전달)
INPUT=$(cat)

# .env 파일에서 Slack 웹훅 URL 로드
if [ -f "$CLAUDE_PROJECT_DIR/.env" ]; then
    source "$CLAUDE_PROJECT_DIR/.env"
else
    exit 0  # .env 없으면 조용히 종료 (오류로 훅 차단하지 않음)
fi

[ -z "$SLACK_WEBHOOK_URL" ] && exit 0

# 공통 필드 추출
HOOK_EVENT=$(echo "$INPUT" | jq -r '.hook_event_name // "Notification"')
MESSAGE=$(echo "$INPUT" | jq -r '.message // ""')
PROJECT_NAME=$(basename "$CLAUDE_PROJECT_DIR")
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# 이벤트 타입별 Slack 메시지 구성
if [ "$HOOK_EVENT" = "PermissionRequest" ]; then
  TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // "알 수 없음"')
  COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // ""')

  DETAIL="도구: \`$TOOL_NAME\`"
  [ -n "$COMMAND" ] && DETAIL="$DETAIL\n명령어: \`$COMMAND\`"
  [ -n "$MESSAGE" ] && DETAIL="$DETAIL\n메시지: $MESSAGE"

  PAYLOAD=$(printf '{"text":"⚠️ *권한 요청*\n프로젝트: `%s`\n%s\n시간: %s\n\n확인이 필요합니다!"}' \
    "$PROJECT_NAME" "$DETAIL" "$TIMESTAMP")
else
  CONTENT="${MESSAGE:-알림이 도착했습니다}"
  PAYLOAD=$(printf '{"text":"🔔 *%s* 알림\n프로젝트: `%s`\n내용: %s\n시간: %s"}' \
    "$HOOK_EVENT" "$PROJECT_NAME" "$CONTENT" "$TIMESTAMP")
fi

curl -s -X POST \
  -H 'Content-type: application/json' \
  --data "$PAYLOAD" \
  "$SLACK_WEBHOOK_URL" > /dev/null

exit 0
