extern crate http;
extern crate now_lambda;
extern crate serde;
extern crate serde_derive;
extern crate serde_json;

#[derive(serde_derive::Serialize, serde_derive::Deserialize)]
struct BodyResponse {
	hello: String
}

fn typed_body() -> BodyResponse {
	let data = r#" { "hello": "serverless world... with Rust!" }"#;
	let body_response: BodyResponse = serde_json::from_str(data).expect("error parsing body");
	return body_response;
}

fn handler(_: now_lambda::Request) -> Result<impl now_lambda::IntoResponse, now_lambda::error::NowError> {
	let body = typed_body();
	let payload = serde_json::to_string(&body).unwrap();

	let response = now_lambda::Response::builder()
		.status(200)
		.header("Content-Type", "text/plain")
		.body(payload)
		.expect("Internal Server Error");

		Ok(response)
}

// Start the runtime with the handler
fn main() -> Result<(), Box<dyn std::error::Error>> {
	Ok(now_lambda::lambda!(handler))
}