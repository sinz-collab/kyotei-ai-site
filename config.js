window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ad7ac2ced7a7ab5ed70e58897a5c8da4ffc9193e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ad7ac2ced7a7ab5ed70e58897a5c8da4ffc9193e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
