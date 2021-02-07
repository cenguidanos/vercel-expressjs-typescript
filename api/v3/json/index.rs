use ::now_lambda::{error::NowError, lambda, IntoResponse, Request, Response};
use ::std::error::Error;

use ::parse::typed_body;

fn handler(_: Request) -> Result<impl IntoResponse, NowError> {
	let payload = typed_body().expect("Error parsing body");

	let response = Response::builder()
		.status(200)
		.header("Content-Type", "text/plain")
		.body(payload)
		.expect("Error on handler");

	Ok(response)
}

fn main() -> Result<(), Box<dyn Error>> {
	Ok(lambda!(handler))
}
