window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/39c1f818aec99f44dfa68fc0defc33eb175a9548/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/39c1f818aec99f44dfa68fc0defc33eb175a9548/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
