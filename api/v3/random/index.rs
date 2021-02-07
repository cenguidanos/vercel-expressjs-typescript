use ::now_lambda::{error::NowError, lambda, IntoResponse, Request, Response};
use ::std::error::Error;

use ::util::generate_rand;

fn handler(_: Request) -> Result<impl IntoResponse, NowError> {
	let random_number = generate_rand();
	let body = format!(
		"Generating random values between 0-1 with Rust: {}",
		random_number
	);

	let response = Response::builder()
		.status(200)
		.header("Content-Type", "text/plain")
		.body(body)
		.expect("Error on handler");

	Ok(response)
}

fn main() -> Result<(), Box<dyn Error>> {
	Ok(lambda!(handler))
}
