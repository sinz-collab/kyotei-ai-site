window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c0036c9213afad95c6480a44876eec2a32737db6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c0036c9213afad95c6480a44876eec2a32737db6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
