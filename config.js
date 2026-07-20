window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e71524097f698b1e64794b933f5790fd7a56ad5b/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e71524097f698b1e64794b933f5790fd7a56ad5b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
