window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/58bbc48f620c7b86a3bdc67311f4be20549e474e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/58bbc48f620c7b86a3bdc67311f4be20549e474e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
