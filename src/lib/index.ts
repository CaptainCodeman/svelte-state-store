import { writable } from 'svelte/store';
import type { Writable, Updater, StartStopNotifier } from 'svelte/store';

export interface State<T> extends Writable<T> {
	get value(): T;
}

export function state<T>(value: T, start?: StartStopNotifier<T>): State<T> {
	const { subscribe, set: _set } = writable(value, () => start && start(set, update));

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
