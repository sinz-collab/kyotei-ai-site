window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f2bef970531ee3965b5d54926a801a4eda7ebd5b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f2bef970531ee3965b5d54926a801a4eda7ebd5b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
