window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3894e6669fbde4dc50792bb7ce2f9da8c418000d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3894e6669fbde4dc50792bb7ce2f9da8c418000d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
