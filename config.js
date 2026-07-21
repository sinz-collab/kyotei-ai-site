window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/055422d52ff4df2347c4e4172de68d958a40b442/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/055422d52ff4df2347c4e4172de68d958a40b442/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
