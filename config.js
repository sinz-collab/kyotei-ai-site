window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3009b48d6a4eafaf514b1515a0b040a21fc78b68/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3009b48d6a4eafaf514b1515a0b040a21fc78b68/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
