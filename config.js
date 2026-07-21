window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bfe76bef6b6cede3cf7b8e54959b358651cd01d3/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bfe76bef6b6cede3cf7b8e54959b358651cd01d3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
