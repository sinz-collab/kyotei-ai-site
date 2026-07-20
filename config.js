window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/52d2af8dc825701b2cd04d0d3dbbcbda74ccd8dc/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/52d2af8dc825701b2cd04d0d3dbbcbda74ccd8dc/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
