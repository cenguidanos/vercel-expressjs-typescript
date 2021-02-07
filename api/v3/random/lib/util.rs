use rand::prelude::*;

pub fn generate_rand() -> f64 {
	let mut rng = rand::thread_rng();
	let y: f64 = rng.gen();

	y
}
