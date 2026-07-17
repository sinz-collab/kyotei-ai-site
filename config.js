window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cdc3cdc54a4cad16a552d65fde0a3aeb0efe7fa9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cdc3cdc54a4cad16a552d65fde0a3aeb0efe7fa9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
