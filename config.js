window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/244acdaecc4ec1321f903c95c69dde325dd2fbd8/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/244acdaecc4ec1321f903c95c69dde325dd2fbd8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
