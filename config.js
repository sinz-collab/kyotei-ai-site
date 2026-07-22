window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/28c5859629fe38cabf2b7d6a65fdc36d16566cc2/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/28c5859629fe38cabf2b7d6a65fdc36d16566cc2/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
