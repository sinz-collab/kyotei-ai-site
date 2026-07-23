window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a54c77948396ad1d7d9815f32594b994a4a26b9/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6a54c77948396ad1d7d9815f32594b994a4a26b9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
