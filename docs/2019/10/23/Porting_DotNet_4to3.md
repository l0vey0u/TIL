# .NET 4.0 타겟 프로그램 3.5로 호환 포팅 리뷰

 기존 개발했던 프로그램이 .NET 4.0을 타겟으로 하고 개발되어 있어
.NET 4.0이 설치가 되어 있지 않은 환경에서 에러를 내뿜었다.

Windows7 기준으로 .NET 3.5은 기본 설치 패키지에 있으므로
이 버젼에 맞게 다운그레이드를 진행해보았다.

## 선택적 인수가 없어..
- [명명된 인수와 선택적 인수(C# 프로그래밍 가이드) - MS](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments) 글을 보면 4.0부터 선택적 인수가 가능했음을 말해주고 있다.
- 함수 오버로딩 보다는 그냥 기본 설정 값들을 함수 매개변수로 다시 넣어주는 선택지를 골랐다.

## 64Bit 체크 방식 변경
- [Env.is64bit.. - MS](https://docs.microsoft.com/en-us/dotnet/api/system.environment.is64bitoperatingsystem?redirectedfrom=MSDN&view=netframework-4.8#System_Environment_Is64BitOperatingSystem) 이 필드는 4.0부터 탄생했기에 다른 방법이 필요했다.
- [StackOverflow](https://stackoverflow.com/questions/336633/how-to-detect-windows-64-bit-platform-with-net) 를 참고하니 ```IntPtr.Size == 8``` 로 대체 가능한 것을 알게되었다.



