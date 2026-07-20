window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/122d908082781343c0f4840f0b301d3586ea4f35/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/122d908082781343c0f4840f0b301d3586ea4f35/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
