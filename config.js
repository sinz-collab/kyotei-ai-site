window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/19a9eae4d584cf6318a9e3069497db8c9e64479a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/19a9eae4d584cf6318a9e3069497db8c9e64479a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
