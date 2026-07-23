window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/082870e380356bd195058dfcbb227dba085cdd8c/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/082870e380356bd195058dfcbb227dba085cdd8c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
