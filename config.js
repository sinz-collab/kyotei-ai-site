window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f76423172e79dd7aa0bb8f9bff34b0ca249a440d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f76423172e79dd7aa0bb8f9bff34b0ca249a440d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
