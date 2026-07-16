window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/91f0a983f95db66a82191fad5f2c779439e60c9b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/91f0a983f95db66a82191fad5f2c779439e60c9b/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
