import { writable } from 'svelte/store';
import type { Writable, Updater } from 'svelte/store';

export interface State<T> extends Writable<T> {
	get value(): T;
}

export function state<T>(value: T): State<T> {
	const { subscribe, set: _set } = writable(value);

	function set(v: T) {
		_set((value = v));
	}

	function update(updater: Updater<T>) {
		set(updater(value));
	}

	return {
		subscribe,
		set,
		update,

		get value() {
			return value;
		}
	};
}
