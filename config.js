window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/49e4e70d3cbf1942e258bb7e9e7a73c7fd2c849d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/49e4e70d3cbf1942e258bb7e9e7a73c7fd2c849d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
