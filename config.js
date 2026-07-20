window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c5e7888690cab4302c85509f28d75fc6c9d80a22/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c5e7888690cab4302c85509f28d75fc6c9d80a22/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
