window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b3008c4055c76b875d7a2cc5506b018c27ce1310/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b3008c4055c76b875d7a2cc5506b018c27ce1310/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
