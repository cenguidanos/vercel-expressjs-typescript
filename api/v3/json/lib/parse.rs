use ::serde_derive::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct BodyResponse {
	hello: String,
}

pub fn typed_body() -> serde_json::Result<String> {
	let data = BodyResponse {
		hello: "serverless world... with Rust!".to_owned(),
	};

	let parsed = serde_json::to_string(&data)?;

	Ok(parsed)
}
