window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8588dc09ec0fc1a0bbf04f7f406a44c306f25967/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8588dc09ec0fc1a0bbf04f7f406a44c306f25967/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
