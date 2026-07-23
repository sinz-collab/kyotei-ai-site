window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2c49940dc62540d3f241c30c98baa5b95c5194a5/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2c49940dc62540d3f241c30c98baa5b95c5194a5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
