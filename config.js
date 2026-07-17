window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7fff588e574e9c19fa479f85cb2db1984990790e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/7fff588e574e9c19fa479f85cb2db1984990790e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
