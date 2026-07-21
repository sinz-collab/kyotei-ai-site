window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/96abd9be2403ccdd2e6ad4e6da5d4a2eed5bb3d7/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/96abd9be2403ccdd2e6ad4e6da5d4a2eed5bb3d7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
