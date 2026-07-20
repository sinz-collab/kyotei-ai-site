window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f687bbf3cbc10b7a2df2ebc557274b235896ef61/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f687bbf3cbc10b7a2df2ebc557274b235896ef61/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
