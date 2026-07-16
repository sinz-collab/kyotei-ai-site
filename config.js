window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d5e8283edd996fea9ff09d3922ab83da1cd47291/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d5e8283edd996fea9ff09d3922ab83da1cd47291/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
