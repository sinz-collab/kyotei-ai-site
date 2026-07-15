window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d94c2cbbee0d2827d3238382e4800ffa82907b50/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d94c2cbbee0d2827d3238382e4800ffa82907b50/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
