window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c683e80bd0e77c20e506fb984d70e6c5e26062c0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c683e80bd0e77c20e506fb984d70e6c5e26062c0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
