window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b575011eb88b2a76fbf75f1a6ecab665f20965fd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b575011eb88b2a76fbf75f1a6ecab665f20965fd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
