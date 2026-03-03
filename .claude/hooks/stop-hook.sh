#!/bin/bash
# Claude Code 훅: Stop (Claude 작업 완료 시)

INPUT=$(cat)

# Stop 훅 무한루프 방지 (stop_hook_active가 true면 즉시 종료)
if [ "$(echo "$INPUT" | jq -r '.stop_hook_active')" = "true" ]; then
  exit 0
fi

# .env 파일에서 Slack 웹훅 URL 로드
if [ -f "$CLAUDE_PROJECT_DIR/.env" ]; then
    source "$CLAUDE_PROJECT_DIR/.env"
else
    exit 0
fi

[ -z "$SLACK_WEBHOOK_URL" ] && exit 0

PROJECT_NAME=$(basename "$CLAUDE_PROJECT_DIR")
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

PAYLOAD=$(printf '{"text":"✅ *작업 완료*\n프로젝트: `%s`\nClaude Code 작업이 완료되었습니다.\n시간: %s"}' \
  "$PROJECT_NAME" "$TIMESTAMP")

curl -s -X POST \
  -H 'Content-type: application/json' \
  --data "$PAYLOAD" \
  "$SLACK_WEBHOOK_URL" > /dev/null

exit 0
