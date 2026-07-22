window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cf90cf2afac7337bcba3e9f6d97baac70ba33ffb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cf90cf2afac7337bcba3e9f6d97baac70ba33ffb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
