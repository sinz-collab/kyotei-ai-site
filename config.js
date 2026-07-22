window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9e50167381c1b4fed537aa85a22a08fc3f07b40e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/9e50167381c1b4fed537aa85a22a08fc3f07b40e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
