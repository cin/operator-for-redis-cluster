package redis

import (
	"io"
	"testing"

	"github.com/golang/glog"
)

// CloseWithLog safely closes a Closer and logs any error that occurs.
// This is a helper to reduce boilerplate error handling for Close() calls.
func CloseWithLog(closer io.Closer, context string) {
	if err := closer.Close(); err != nil {
		glog.Errorf("Error closing %s: %v", context, err)
	}
}

// CloseWithLogf safely closes a Closer and logs any error using formatted context.
// This is a helper to reduce boilerplate error handling for Close() calls.
func CloseWithLogf(closer io.Closer, format string, args ...interface{}) {
	if err := closer.Close(); err != nil {
		glog.Errorf("Error closing "+format+": %v", append(args, err)...)
	}
}

// DeferCloseWithLog returns a function that safely closes a Closer and logs any error.
// This is designed to be used with defer statements.
func DeferCloseWithLog(closer io.Closer, context string) func() {
	return func() {
		CloseWithLog(closer, context)
	}
}

// DeferCloseWithLogf returns a function that safely closes a Closer and logs any error with formatted context.
// This is designed to be used with defer statements.
func DeferCloseWithLogf(closer io.Closer, format string, args ...interface{}) func() {
	return func() {
		CloseWithLogf(closer, format, args...)
	}
}

// CloseWithTestLog safely closes a Closer and logs any error using testing.T.
// This is specifically for test contexts where glog might not be appropriate.
func CloseWithTestLog(t *testing.T, closer io.Closer, context string) {
	if err := closer.Close(); err != nil {
		if t != nil {
			t.Logf("Error closing %s: %v", context, err)
		}
	}
}

// DeferCloseWithTestLog returns a function that safely closes a Closer and logs any error using testing.T.
// This is designed to be used with defer statements in tests.
func DeferCloseWithTestLog(t *testing.T, closer io.Closer, context string) func() {
	return func() {
		CloseWithTestLog(t, closer, context)
	}
}
