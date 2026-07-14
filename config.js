window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/203f911fe884f038c0f0ae7c200cc87f7d6d5bdd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/203f911fe884f038c0f0ae7c200cc87f7d6d5bdd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
