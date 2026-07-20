window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/46401c66c22dad68e3a639cca7f215a4f07f8506/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/46401c66c22dad68e3a639cca7f215a4f07f8506/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
