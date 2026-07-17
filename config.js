window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eeef42a282a43f9181d21601e6435e96d0ced53a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/eeef42a282a43f9181d21601e6435e96d0ced53a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
