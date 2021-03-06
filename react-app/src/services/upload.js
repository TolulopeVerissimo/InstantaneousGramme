export async function getSignedRequest(photo){
  let res = await fetch('/sign_s3/?file_name='+photo.name+"&file_type="+photo.type);
  if (res.ok) {
    res= await res.json()
    uploadFile(photo, res.data, res.url);
  } else {
    return {"error": "Upload Failed"}
  }
  return res.data
}

export async function uploadFile(file, s3Data, url){
  const data = new FormData()
  for(const key in s3Data.fields){
    data.append(key, s3Data.fields[key]);
  }
  data.append('file', file)
  const res = await fetch(url, {
    method:'POST',
    body: data
  })
  return res
}
