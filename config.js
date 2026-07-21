window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0f148857c11eb5d7bfd1c3e8082388645f653699/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0f148857c11eb5d7bfd1c3e8082388645f653699/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
