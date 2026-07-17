window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b1dbb4f5e18f926ec212e2ccd804a7e9457e3cff/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b1dbb4f5e18f926ec212e2ccd804a7e9457e3cff/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
