window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cfdebde55a9832a1aafb70ec8bfc2e5a9fe55cf8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cfdebde55a9832a1aafb70ec8bfc2e5a9fe55cf8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
