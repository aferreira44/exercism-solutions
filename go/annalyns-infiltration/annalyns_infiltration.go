package annalyn

// CanFastAttack can be executed only when the knight is sleeping.
func CanFastAttack(knightIsAwake bool) bool {
	return !knightIsAwake
}

// CanSpy can be executed if at least one of the characters is awake.
func CanSpy(knightIsAwake, archerIsAwake, prisonerIsAwake bool) bool {
	for _, c := range [3]bool{knightIsAwake, archerIsAwake, prisonerIsAwake} {
		if c {
			return true
		}
	}
	return false
}

// CanSignalPrisoner can be executed if the prisoner is awake and the archer is sleeping.
func CanSignalPrisoner(archerIsAwake, prisonerIsAwake bool) bool {
	return prisonerIsAwake && !archerIsAwake
}

// CanFreePrisoner can be executed if the prisoner is awake and the other 2 characters are asleep
// or if Annalyn's pet dog is with her and the archer is sleeping.
func CanFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent bool) bool {
	return (prisonerIsAwake && (!knightIsAwake && !archerIsAwake)) || (petDogIsPresent && !archerIsAwake)
}
